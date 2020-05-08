import React, { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { LinksList } from '../components/LinksList'

export const LinksPage = () => {
  const { token } = useContext(AuthContext)
  const [links, setLinks] = useState([])

  const getLinks = useCallback(async () => {
    try {
      const res = await axios.get('/api/links', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setLinks(res.data)
    } catch (e) { }
  }, [token])

  useEffect(() => {
    getLinks()
  }, [getLinks])

  return (
    <LinksList links={links} />
  )
}