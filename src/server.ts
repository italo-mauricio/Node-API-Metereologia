import bodyParser from 'body-parser';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';

export class SetupServer extends Server {
    
    constructor(private port = 3000){
        super();    
    }

    public init(): void {
        this.setupExpress();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json());
    }

    public getApp(): Application{
        return this.app;
    }

}