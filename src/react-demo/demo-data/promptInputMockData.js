import { Disabled, Image as ImageIcon } from '../../../components/Icons.es6'

export const mockTypingPrompt = 'Little Steps Shoe Shop is a specialty store offering a wide range of high-quality, stylish, and comfortable footwear for kids of all ages'

export const mockImprovedPrompt = `Business/Project Name:
Little Steps Shoe Shop

Description:
Little Steps Shoe Shop is a specialty store offering a wide range of high-quality, stylish, and comfortable footwear for kids of all ages.

Style:
- Playful and cheerful design
- Bright, kid-friendly colors like yellow, green, and orange
- Incorporates fun shapes and whimsical illustrations.

Content to include on website:
- About: Little Steps Shoe Shop has been dedicated to helping children take their first steps in comfort and style for over 15 years. We offer expert advice on proper shoe fitting and prioritize the health and happiness of little feet.
- Products: The shop offers sneakers, sandals, boots, dress shoes, and slippers, ensuring a variety of options to suit every occasion and preference.
- Services: Services include professional shoe fitting and personalized style consultations to help parents find the perfect footwear for their children.
- Customers often ask if we offer wide-size shoes for kids and whether shoes can be returned or exchanged if they don’t fit.
- Contact: The store is located at 123 Kiddo Lane, Playtown, USA. You can reach us by phone at (555) 123-4567 or via email at support@littlesteps.com.
- Schedule appointment: A form is available to book a personalized shoe fitting session. It includes fields for the parent’s name, child’s name, preferred date and time, and contact information.`

export const mockColorOptions = [
  { value: 'gray', color: '#787878', label: 'Gray' },
  { value: 'black', color: '#000000', label: 'Black' },
  { value: 'red', color: '#F50904', label: 'Red' },
  { value: 'orange', color: '#F89A06', label: 'Orange' },
  { value: 'yellow', color: '#FEFF06', label: 'Yellow' },
  { value: 'green', color: '#4AFF01', label: 'Green' },
  { value: 'teal', color: '#53FFFF', label: 'Teal' },
  { value: 'blue', color: '#2024FB', label: 'Blue' },
  { value: 'pink', color: '#F703FF', label: 'Pink' },
  { value: 'purple', color: '#9900FF', label: 'Purple' },
]

export const mockWebsiteStyleOptions = [
  { value: 'None', label: 'None' },
  { value: 'Bold', label: 'Bold' },
  { value: 'Calm', label: 'Calm' },
  { value: 'Classic', label: 'Classic' },
  { value: 'Clean', label: 'Clean' },
  { value: 'Elegant', label: 'Elegant' },
  { value: 'Futuristic', label: 'Futuristic' },
  { value: 'Sophisticated', label: 'Sophisticated' },
]

export const imageStyleTabs = [
  { id: 'photography', label: 'Photography' },
  { id: 'illustration', label: 'Illustration' },
]

export const mockImageStyleOptions = [
  { id: 'no-photography', label: 'No Photography', category: 'photography', icon: Disabled },
  { id: 'abstract-photo', label: 'Abstract', category: 'photography', icon: ImageIcon },
  { id: 'black-and-white', label: 'Black and white', category: 'photography', icon: ImageIcon },
  { id: 'cool', label: 'Cool', category: 'photography', icon: ImageIcon },
  { id: 'earthy', label: 'Earthy', category: 'photography', icon: ImageIcon },
  { id: 'grainy', label: 'Grainy', category: 'photography', icon: ImageIcon },
  { id: 'high-contrast', label: 'High-contrast', category: 'photography', icon: ImageIcon },
  { id: 'minimalist-photo', label: 'Minimalist', category: 'photography', icon: ImageIcon },
  { id: 'monochromatic', label: 'Monochromatic', category: 'photography', icon: ImageIcon },
  { id: 'moody', label: 'Moody', category: 'photography', icon: ImageIcon },
  { id: 'professional', label: 'Professional', category: 'photography', icon: ImageIcon },
  { id: 'sepia', label: 'Sepia', category: 'photography', icon: ImageIcon },
  { id: 'serene', label: 'Serene', category: 'photography', icon: ImageIcon },
  { id: 'vibrant', label: 'Vibrant', category: 'photography', icon: ImageIcon },
  { id: 'warm', label: 'Warm', category: 'photography', icon: ImageIcon },
  { id: 'no-illustration', label: 'No Illustration', category: 'illustration', icon: Disabled },
  { id: 'abstract-illust', label: 'Abstract', category: 'illustration', icon: ImageIcon },
  { id: 'acrylic', label: 'Acrylic', category: 'illustration', icon: ImageIcon },
  { id: 'anime-manga', label: 'Anime / Manga', category: 'illustration', icon: ImageIcon },
  { id: 'charcoal', label: 'Charcoal', category: 'illustration', icon: ImageIcon },
  { id: 'comic-cartoon', label: 'Comic / cartoon', category: 'illustration', icon: ImageIcon },
  { id: 'flat-vector', label: 'Flat vector', category: 'illustration', icon: ImageIcon },
  { id: 'geometric', label: 'Geometric', category: 'illustration', icon: ImageIcon },
  { id: 'ink', label: 'Ink', category: 'illustration', icon: ImageIcon },
  { id: 'line-art', label: 'Line art', category: 'illustration', icon: ImageIcon },
  { id: 'minimalist-illust', label: 'Minimalist', category: 'illustration', icon: ImageIcon },
  { id: 'pencil', label: 'Pencil', category: 'illustration', icon: ImageIcon },
  { id: 'realism', label: 'Realism', category: 'illustration', icon: ImageIcon },
  { id: 'surreal', label: 'Surreal', category: 'illustration', icon: ImageIcon },
  { id: 'watercolor', label: 'Watercolor', category: 'illustration', icon: ImageIcon },
]
