// Type definitions for testimonials
export interface Testimonial {
  id: number;
  name: string;
  email: string;
  rating: number;
  text: string;
  trip: string;
  status: 'pending' | 'approved';
  date: string;
}

// Initial testimonials data
export const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    rating: 5,
    text: 'The 8-day Bhutan trip was absolutely magical! From the Tiger\'s Nest hike to the peaceful valleys, everything was perfect. Our guide was knowledgeable and went above and beyond.',
    trip: '8 Days 7 Nights',
    status: 'approved',
    date: '2024-03-15'
  },
  {
    id: 2,
    name: 'Rahul Kapoor',
    email: 'rahul@example.com',
    rating: 5,
    text: 'This was my first international trip, and I couldn\'t have chosen better. Bhutan\'s beauty is unspoiled, and We Go Authentic made every moment special. Highly recommend!',
    trip: '7 Days 6 Nights Group Trip',
    status: 'approved',
    date: '2024-02-20'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    email: 'ananya@example.com',
    rating: 4,
    text: 'The private trip allowed us to explore at our own pace. The hot stone bath after the Tiger\'s Nest hike was the perfect reward. Excellent planning by the team!',
    trip: '5 Days 4 Nights',
    status: 'approved',
    date: '2024-01-10'
  },
  {
    id: 4,
    name: 'Vihaan Mehta',
    email: 'vihaan@example.com',
    rating: 5,
    text: 'Bhutan has been on my bucket list for years, and We Go Authentic made it exceed all expectations. The attention to detail and local connections made this trip unforgettable.',
    trip: '7 Days 6 Nights Private Trip',
    status: 'approved',
    date: '2023-12-05'
  }
];

// Function to get testimonials from local storage or use initial data
export function getTestimonials(): Testimonial[] {
  if (typeof window === 'undefined') {
    return initialTestimonials; // Return initial data when running on server
  }

  const storedTestimonials = localStorage.getItem('testimonials');
  if (storedTestimonials) {
    return JSON.parse(storedTestimonials);
  } else {
    // If no stored testimonials, save the initial data and return it
    localStorage.setItem('testimonials', JSON.stringify(initialTestimonials));
    return initialTestimonials;
  }
}

// Function to add a new testimonial
export function addTestimonial(testimonial: Omit<Testimonial, 'id' | 'status' | 'date'>): void {
  const testimonials = getTestimonials();

  // Generate a new ID
  const newId = testimonials.length > 0
    ? Math.max(...testimonials.map(t => t.id)) + 1
    : 1;

  // Create the new testimonial with a pending status
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: newId,
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  };

  // Add the new testimonial to the list
  testimonials.push(newTestimonial);

  // Save to local storage
  localStorage.setItem('testimonials', JSON.stringify(testimonials));
}

// Function to get approved testimonials only (for display on the site)
export function getApprovedTestimonials(): Testimonial[] {
  const testimonials = getTestimonials();
  return testimonials.filter(testimonial => testimonial.status === 'approved');
}

// Function to update testimonial status (would be used in an admin panel)
export function updateTestimonialStatus(id: number, status: 'pending' | 'approved'): void {
  const testimonials = getTestimonials();
  const updatedTestimonials = testimonials.map(testimonial =>
    testimonial.id === id ? { ...testimonial, status } : testimonial
  );

  localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
}

// Helper function to simulate auto-approval after a delay (for demo purposes)
export function simulateApproval(id: number, delayMs: number = 30000): void {
  setTimeout(() => {
    updateTestimonialStatus(id, 'approved');
  }, delayMs);
}
