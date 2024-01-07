export interface HostAttributes {
    result: false,
    message: "",
    code: "",
    external_data: {
      id: 0,
      before_level: 0,
      after_level: 0,
      member: {
        id: 0,
        level: 0,
        profile_image: {
          id: 0,
          filename: "",
          thumb_url: "",
          mime: "",
        },
        nickname: "",
        user: {
          id: 0,
          email: "",
          is_active: false,
        },
        fandom: {
          id: 0,
          title: "",
          image: {
            id: 0,
            filename: "",
            thumb_url: "",
            mime: ""
          },
          artist: {
            id: 0,
            name: "",
            image: {
              id: 0,
              filename: "",
              thumb_url: "",
              mime: "",
            }
          }
        },
      },
      status: 0
    }
}

interface ApplyImage {
    id: number
    filename: string
    thumb_url: string
    mime: string
}

export interface ApplyState {
    loading: boolean
    check: boolean
    data: {
      result: boolean,
      message: string,
      code: string,
      external_data: {
        id: number,
        before_level: number,
        after_level: number,
        member: {
          id: number,
          level: number,
          profile_image: ApplyImage,
          nickname: string,
          user: {
            id: number,
            email: string,
            is_active: boolean
          },
          fandom: {
            id: number,
            title: string,
            image: ApplyImage
            artist: {
                id: number,
                name: string,
                image: ApplyImage
              }
          },
        },
        status: number
      }
    }
    date: string
    error: string | undefined
}
export const initialState: ApplyState = {
  loading: false,
  check: false,
  data: {
    result: false,
    message: "",
    code: "",
    external_data: {
      id: 0,
      before_level: 0,
      after_level: 0,
      member: {
        id: 0,
        level: 0,
        profile_image: {
          id: 0,
          filename: "",
          thumb_url: "",
          mime: "",
        },
        nickname: "",
        user: {
          id: 0,
          email: "",
          is_active: false,
        },
        fandom: {
          id: 0,
          title: "",
          image: {
            id: 0,
            filename: "",
            thumb_url: "",
            mime: ""
          },
          artist: {
            id: 0,
            name: "",
            image: {
              id: 0,
              filename: "",
              thumb_url: "",
              mime: "",
            }
          }
        },
      },
      status: 0
    }
  },
  date: "",
  error: "",
};