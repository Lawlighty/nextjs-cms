"use strict";
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");
/**
 * layout controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep", // 加上默认的populate=deep参数
    };
    const { data } = await super.find(ctx);

    return removeAttrsAndId(removeTime(data[0]));
  },
}));
