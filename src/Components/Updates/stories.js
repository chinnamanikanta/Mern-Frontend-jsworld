import React from 'react';
import { useGlobalContext } from './context';
import Loader from '../../Utils/loder'

const Stories = () => {

    const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <Loader/>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='story shadow p-3 mb-5 bg-white rounded'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
                className='read-link text-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='remove-btn text-danger'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )

}

export default Stories