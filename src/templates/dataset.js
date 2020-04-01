import React from 'react'
import Layout from '../components/layout'
import style from './dataset.module.css'

const Dataset = ({ pageContext: dataset }) => (
  <Layout>
    <section className={style.dataset}>
      <div className={style.metadata}>
        <dl>
          <dt>Title:</dt>
          <dd>{dataset.title}</dd>
          <dt>Repository:</dt>
          <dd>{dataset.repository}</dd>
          <dt>Repository URL:</dt>
          <dd><a href={dataset.url}>{dataset.url}</a></dd>
          <dt>Creator(s):</dt>
          <dd>
            <ul>
            {dataset.creators.map(a => (
              <li>{a}</li>
            ))}
            </ul>
          </dd>
          <dt>Subjects:</dt>
          <dd>
            <ul>
            {dataset.subjects.map(s => (
              <li>{s}</li>
            ))}
            </ul>
          </dd>
          <dt>Dates:</dt>
          <dd>
            <ul>
            {dataset.dates.map(d => (
              <li>{`${d.start} - ${d.end}`}</li>
            ))}
            </ul>
          </dd>
          <dt>Number of Tweets:</dt>
          <dd>{dataset.tweets.toLocaleString()}</dd>
        </dl>
      </div>
      <div className={style.description}>
        <span className={style.label}>Description:</span>
        <div dangerouslySetInnerHTML={{__html: dataset.description}} />
      </div>
    </section>
  </Layout>
)

export default Dataset