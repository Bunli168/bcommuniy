import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOpportunitiesStore = defineStore('opportunities', () => {
  const jobs = ref([
    {
      id: 1,
      title: 'Senior Frontend Engineer (Vue.js)',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $150k',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TC',
      description: 'We are looking for an experienced Vue.js developer to lead our frontend team in building our next-generation SaaS product...',
      tags: ['vue', 'javascript', 'pinia'],
      postedAt: '2 days ago'
    },
    {
      id: 2,
      title: 'Backend Developer (Node.js)',
      company: 'StartupX',
      location: 'New York, NY (Hybrid)',
      type: 'Contract',
      salary: '$80 - $100 / hr',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=SX',
      description: 'Join our fast-paced startup to build robust APIs using Express and Postgres...',
      tags: ['node.js', 'express', 'postgresql'],
      postedAt: '4 hours ago'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Global Solutions',
      location: 'London, UK (On-site)',
      type: 'Full-time',
      salary: '£60k - £80k',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=GS',
      description: 'Looking for a full stack dev to maintain and improve our internal CRM tools.',
      tags: ['vue', 'laravel', 'mysql'],
      postedAt: '1 week ago'
    }
  ])

  const events = ref([
    {
      id: 1,
      title: 'Vue.js Global Summit 2024',
      date: 'Nov 15, 2024',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Online',
      type: 'Conference',
      coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      description: 'Join thousands of Vue developers for a full day of talks from the core team and community members.',
      attendeesCount: 1250,
      speakers: ['Evan You', 'Eduardo San Martin Morote'],
      price: 'Free'
    },
    {
      id: 2,
      title: 'Local Dev Meetup: Web Security Basics',
      date: 'Oct 28, 2023',
      time: '6:30 PM - 8:30 PM',
      location: 'Tech Hub, San Francisco',
      type: 'Meetup',
      coverImage: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800',
      description: 'A casual meetup discussing common web vulnerabilities and how to mitigate them in modern SPAs.',
      attendeesCount: 45,
      speakers: ['Sarah Coder'],
      price: 'Free'
    }
  ])

  return { jobs, events }
})
