import { createUserService } from "../models/userModel.js";
import { getAllUsersService } from "../models/userModel.js";
import { getUserByIdService } from "../models/userModel.js";
import { updateUserService } from "../models/userModel.js";
import { deleteUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json(
        {
            status,
            message,
            data,
        }
    );
};

export const createUser = async (req, res,next) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    } catch (error) {
        handleResponse(res, 500, "User creation failed", error);
        next(error);
    }
}

export const getAllUsers = async (req, res,next) => {
    try {
        const user = await getAllUsersService();
        handleResponse(res, 200, "Users fetched successfully", user);
    } catch (error) {
        handleResponse(res, 500, "Users fetching failed", error);
        next(error);
    }
}


export const getUserById = async (req, res,next) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) {
            handleResponse(res, 404, "User not found");
            return;
        }
        handleResponse(res, 200, "User fetched successfully", user);
    } catch (error) {
        handleResponse(res, 500, "User fetching failed", error);
        next(error);
    }
}


export const updateUser = async (req, res,next) => {
    const { name, email } = req.body;
    try {
        const user = await getUserByIdService(req.params.id, name, email);
        if (!user) {
            handleResponse(res, 404, "User not found");
            return;
        }
        const updatedUser = await updateUserService(name, email, id);
        handleResponse(res, 200, "User updated successfully", updatedUser);
    } catch (error) {
        handleResponse(res, 500, "User updating failed", error);
        next(error);
    }
}


export const deleteUser = async (req, res,next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) {
            handleResponse(res, 404, "User not found");
            return;
        }
        const deletedUser = await deleteUserService(id);
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    } catch (error) {
        handleResponse(res, 500, "User deletion failed", error);
        next(error);
    }
}