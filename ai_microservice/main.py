from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

app = FastAPI()


class UserMessage(BaseModel):
    message: str

def system_prompts(filename="system_prompts.txt"):
    with open(filename, "r", encoding="utf-8") as file:
        prompts = file.read().splitlines()
    return prompts

@app.post("/get-response")
async def get_response(user_message: UserMessage):
    try:
        message = user_message.message

        prompts = system_prompts()

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "".join(prompts)},
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
