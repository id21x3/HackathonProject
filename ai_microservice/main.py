from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

app = FastAPI()


class AccountInfo(BaseModel):
    username: str
    current_budget: float
    planned_budget: float
    spent_on: dict

class UserMessage(BaseModel):
    message: str
    accountInfo: AccountInfo

def system_prompts(filename="system_prompts.txt"):
    with open(filename, "r", encoding="utf-8") as file:
        prompts = file.read().splitlines()
    return prompts

def money_spent_on(spent_on: dict):
    return ", ".join([f"{category} - {amount}" for category, amount in spent_on.items()])

def account_prompts(accountInfo: AccountInfo):
    return (
        f"\nYou're communicating with {accountInfo.username}."
        f"\nCurrent expenditures of the family for the month - {accountInfo.current_budget}€."
        f"\nPlanned family budget for the month - {accountInfo.planned_budget}€."
        f"\nDuring the current month, the money was spent on: {money_spent_on(accountInfo.spent_on)}."
    )


@app.post("/get-response")
async def get_response(user_message: UserMessage):
    try:
        message = user_message.message

        prompts = system_prompts()

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "".join(prompts) + account_prompts(user_message.accountInfo)},
                {"role": "user", "content": message}
            ]
        )

        response_content = completion.choices[0].message['content']
        return {"response": response_content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
