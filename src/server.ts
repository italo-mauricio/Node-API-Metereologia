import bodyParser from 'body-parser';
import './util/module-alias';
import { Server } from '@overnightjs/core';

export class SetupServer extends Server {
    getApp(): any {
        throw new Error('Method not implemented.');
    }
    
    constructor(private port = 3000){
        super();    
    }

    public init(): void {
        this.setupExpress();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json());
    }
}