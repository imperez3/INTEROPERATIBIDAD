# Proyecto ATM API

Este proyecto despliega una API RESTful en AWS que maneja operaciones de cajero automático (ATM) utilizando AWS Lambda y API Gateway. Las operaciones incluyen depósito, retiro y cambio de clave.

## Requisitos

Antes de empezar, asegúrate de tener los siguientes requisitos instalados:

- Node.js](https://nodejs.org/) (versión 14.x o superior)
- [WS CLI](https://aws.amazon.com/cli/)
- AWS CDK](https://aws.amazon.com/cdk/) (versión 2.x o superior)
- Una cuenta de AWS

## Configuración Inicial

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local:

   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

// Instalar Dependencias
     npm install

 Configurar AWS CLI

//Configura tus credenciales de AWS:
      aws configure

//Estructura del Proyecto
    debe tener la siguiente estructura:
    atm-api/
├── bin/
│   └── atm-api.js
├── lib/
│   └── atm-api-stack.js
├── lambdas/
│   ├── deposito.js
│   ├── retiro.js
│   └── cambiarClave.js
├── node_modules/
├── package.json
└── cdk.json

