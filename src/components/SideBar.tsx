import { useState, useEffect  } from 'react'
import { api } from '../services/api'

import { Button } from './Button'

import '../styles/sidebar.scss'
interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

interface SideBarProps {
  onClickButton: (id: number) => void
  selectedGenreId: number
}

export function SideBar({ onClickButton, selectedGenreId}: SideBarProps) {
  // Complete aqui

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
  
}