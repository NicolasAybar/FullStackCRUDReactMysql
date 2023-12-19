import db from "../database/db.js";
import {DataTypes} from "sequelize";

const BlogModel = db.define('customers',{
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
})
export default BlogModel
