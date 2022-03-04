/* eslint-disable */
import swaggerUi from 'swagger-ui-express';
import SwaggerFile from './swagger.json'
import { app } from ".";

app.use("/apiUser", swaggerUi.serve, swaggerUi.setup(SwaggerFile));

app.listen(3333, () => console.log("Server is running!"));
