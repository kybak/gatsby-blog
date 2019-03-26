import React from "react"
import { Container, Code, Header, Divider, Text, Link } from "../components/main"
import "../styles/global.css"

export default () => (
  <Container alignCenter>
    <Container narrow>
      <Header huge>Labs II</Header>
      <Divider small/>
      <br/>
      <Header big>Part I</Header>
      <Text>
        I was tasked with seeding the database, providing back-end search functionality, and building the reservations
        page. The challenges I faced consisted of searching documents by properties on other documents in which they
        reference. I ended up writing a short article about the search functionality as it was more sophisticated than
        standard Mongo queries. This gave the team a way to approach the feature with some background understanding of
        why and how it works. Here is the link: <Link
        href="https://lambdaschoolstudents.slack.com/files/UBA5PFW9Z/FH4DN8YF8/Search">https://lambdaschoolstudents.slack.com/files/UBA5PFW9Z/FH4DN8YF8/Search</Link>
      </Text>
      <br/>
      <Text>
        In a nutshell, it makes use of a Mongo aggregate operator. By doing so, we can construct a query which behaves
        similarly to an SQL join. This way, we can form more complicated queries, searching referenced documents which
        are stored as IDs in a particular document. The implementation is in essence very simple. Rather than
        doing <Code>.find({})</Code> we do <Code>.aggregate([])</Code> where the passed in array is the aggregate
        pipeline.
      </Text>
      <br/>
      <Text bold>For a detailed analysis read the article in the link above.</Text>
      <br/>
      <br/>
      <Header big>Part II</Header>
      <Text>Forming a team has been a valuable experience. It is challenging bringing people together a varying skill
        levels and deciding on every little piece of the app. To help the team solidify as a group I was able to create
        a lot of the boilerplate that got us up and running including but not limited to the theme and styling library,
        the seed file, all of the initial data models, and the first page that actually pulled and displayed data using
        Redux and Semantic UI. This way the other students could have an example to work off of. </Text>
      <br/>
      <Text>I recognize the importance of not dwellign too much and getting things moving forward but also making sure everyone feels like they are playing a part. I think it's really helpful to have the boilerplate set up and something to work off of. In this way the other students can do their own work and become immersed in the app and tackle their own challenges. We have had many Zoom meetings to give everyone an opportunity to make decisions regarding the app and make their voice heard.</Text>
    </Container>
  </Container>
)

