import { createAction } from '@reduxjs/toolkit'

export const rauto = createAction('rauto')

// client
export const getclients = 'client/all'
export const addclient = 'client/add'
export const getclient = 'client/' // :id
export const editclient = 'client/' // :id

// car
export const getcar = 'Car/' // :id
export const addcar = 'Car/add'
export const editcar = 'Car/' // :id
