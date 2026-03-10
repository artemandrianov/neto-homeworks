import type { Project } from '../types/types'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import { Component } from 'react'

interface PortfolioState {
  selected: string
  projects: Project[]
}

const filters = ['All', 'Websites', 'Flayers', 'Business Cards']

class Portfolio extends Component<object, PortfolioState> {
  constructor(props: object) {
    super(props)
    this.state = {
      selected: 'All',
      projects: [
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
          category: 'Flayers',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
          category: 'Flayers',
        },
      ],
    }
  }
  handleSelectFilter = (filter: string) => {
    this.setState({ selected: filter })
  }

  getFilteredProjects(): Project[] {
    const { selected, projects } = this.state

    if (selected === "All") {
      return projects
    }

    return projects.filter((project) => project.category === selected)
  }

  render() {
    const { selected } = this.state
    const filteredProjects = this.getFilteredProjects()

    return (
      <>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </>
    );
  }
}

export default Portfolio