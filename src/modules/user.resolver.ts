import { UserService } from "../services/User";

const userService = new UserService();

export const resolvers = {

  Query: {

    users: async () => {
      return userService.getUsers();
    },

    user: async (_: any, args: { id: string }) => {
      return userService.getUser(args.id);
    }

  },

  Mutation: {

    createUser: async (_: any, args: any) => {
      return userService.createUser(args);
    },

    updateUser: async (
      _: any,
      args: { id: string; name?: string; email?: string; age?: number }
    ) => {

      const { id, ...data } = args;

      return userService.updateUser(id, data);

    },

    deleteUser: async (
      _: any,
      args: { id: string }
    ) => {

      return userService.deleteUser(args.id);

    }

  }

};