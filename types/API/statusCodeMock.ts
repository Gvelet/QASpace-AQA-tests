export interface httpStatuses {
    name: number,
    title: string,
    description: string
}

export interface httpStatusesGroup {
    name: number,
    description: string
}

export interface HttpStatusesResponse  {
    statuses: httpStatuses[],
    statusesDesc: httpStatusesGroup[]
}