import { example } from '../../Library/Objects/Example/query.example.js';

export function appRouter(db){
    db.use("/exampleRoute", example)
}