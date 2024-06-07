import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    // o ! significa nao existir
    return reply.status(401).send({
      error: 'Unauthorizied.',
    })
  }
}
