import { type ServerBuild, createRequestHandler } from "react-router";
import * as build from "../build/server";

export const onRequest = createRequestHandler(build as unknown as ServerBuild);

export default {
  async fetch(request: Request) {
    return await onRequest(request);
  },
};
