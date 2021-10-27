import express, {Application, Request, Response} from 'express';
import * as dotenv from 'dotenv'

const app = express();
dotenv.config();


app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send(
           "Hello, Welcome to pokoknumpuk.😁",
        );
    }
);

try {
    app.listen(process.env.PORT, (): void => {
        console.log(`server is running on http://localhost:${process.env.PORT}`);
    })
} catch (error) {
    console.error(error);
}

