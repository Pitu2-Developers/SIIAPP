import { Context } from "koa";


export interface EntityController {
    create(ctx: Context): Promise<void>
    remove(ctx: Context): Promise<void>
    update(ctx: Context): Promise<void>
}


// export class EntityController {
//     create(ctx: Context) { }
//     async remove(ctx: Context) { }
//     async update(ctx: Context) { }

// }