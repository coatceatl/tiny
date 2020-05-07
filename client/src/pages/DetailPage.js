import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { LinkCard } from '../components/LinkCard'

export const DetailPage = () => {
  const { token } = useContext(AuthContext)
  const [link, setLink] = useState(null)
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const res = await axios.get(`/api/links/${linkId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setLink(res.data)
    } catch (e) { }
  }, [token, linkId])

  useEffect(() => {
    getLink()
  })
  console.log('Link: ', link)

  return (
    <>
      {link && <LinkCard link={link} />}
    </>
  )
}