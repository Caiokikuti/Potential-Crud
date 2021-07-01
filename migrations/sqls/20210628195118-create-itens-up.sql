/* Replace with your SQL commands */
create table users(
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT null,

    "email" text not null,
    "password" text not null
);

create table developers(
    id serial primary key,
    
    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT null,

    nome text not null,
    idade integer not null,
    sexo char not null,
    hobby text not null,
    data_nascimento date not null   
);