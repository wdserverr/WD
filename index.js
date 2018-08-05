require('dotenv').config()
if (!process.env.TOKEN || !process.env.botPrefix || !process.env.ownerID) throw new Error('no env config found.')

const { ShardingManager } = require('discord.js')
const manager = new ShardingManager('./server.js', {
  token: process.env.TOKEN
})

manager.spawn()

manager.on('launch', shard => {
  console.log(`[${new Date().toISOString()}] Launched shard #${shard.id}`)
})

manager.on('message', (shard, message) => {
  console.log(`[${new Date().toISOString()}] #${shard.id} | ${message._eval} | ${message._result}`)
})
