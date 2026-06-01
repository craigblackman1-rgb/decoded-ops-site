import fs from 'fs'
import path from 'path'

export interface PublishedDocs {
  [clientId: string]: {
    [docId: string]: boolean
  }
}

const dataPath = path.join(process.cwd(), 'data', 'published-docs.json')

export function getPublishedDocs(): PublishedDocs {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export function setPublished(clientId: string, docId: string, published: boolean): PublishedDocs {
  const data = getPublishedDocs()
  if (!data[clientId]) {
    data[clientId] = {}
  }
  data[clientId][docId] = published
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8')
  return data
}
