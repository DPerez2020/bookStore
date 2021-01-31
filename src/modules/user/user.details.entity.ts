import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_details')
export class UserDetail extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar',length:50,nullable:false})
    name:string

    @Column({type:'varchar',nullable:true,length:50})
    lastname:string

    @Column({type:'bit',nullable:false,default:true})
    status:boolean

    @Column({type:'timestamp',name:'created_at'})
    createdAd:Date

    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date

}