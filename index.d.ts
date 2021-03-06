interface Config {
  key?: string
  option: any
  connections?: number
  time?: number
  close?: number
}

interface MySQL {
  master: Array<string>
  slave: Array<string>
  username: string
  password: string
  database: string
  connections?: number
  time?: number
  close?: number
}

declare function aiMysqlClient(config: Config | MySQL, cache?: string)

export = aiMysqlClient
