/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users_knex').insert([
    {
      login: '111111',
      email: '111111@111.com',
      password: '$2a$07$4e8OreVOWPHzDgO0Z.CfbOipsfaS404j7pS3jhsgaalAZmgitcUAC'
    },
    {
      login: '1111111',
      email: '1111111@111.com',
      password: '$2a$07$CKYaMfd6DEEV1m.Ohbd3uu29CMQOkAUvDb9ckgA6btmSByQW0Ux4y'
    }
  ])

};
