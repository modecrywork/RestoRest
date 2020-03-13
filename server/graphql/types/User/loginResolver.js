const loginResolver = {
  name: "signIn",
  type: "AuthPayload!",
  args: { username: "String!", password: "String!" },
  resolve: async ({ args: { username, password }, context }) => {
    const { user } = await context.authenticate("graphql-local", {
      username,
      password
    });
    context.login(user);
    return { user };
  }
};

export default loginResolver;
