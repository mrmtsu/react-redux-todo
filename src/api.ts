export type ColumnID = string & { readonly brand: unique symbol }
export type CardID = string & { readonly brand: unique symbol }

export type ReqAndRes = {
  'GET /v1/columns': {
    req: null
    res: {
      id: ColumnID
      title?: string
    }[]
  }

  'GET /v1/cards': {
    req: null
    res: {
      id: CardID
      text?: string
    }[]
  }

  'POST /v1/cards': {
    req: {
      id: CardID
      text?: string
    }
    res: {
      id: CardID
      text?: string
    }
  }

  'DELETE /v1/cards': {
    req: {
      id: CardID
    }
    res: {}
  }

  'GET /v1/cardsOrder': {
    req: null
    res: Record<string, CardID | ColumnID | null>
  }

  'PATCH /v1/cardsOrder': {
    req: Record<string, CardID | ColumnID | null>
    res: Record<string, CardID | ColumnID | null>
  }
}
