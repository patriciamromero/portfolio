export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
  }
}

// Prevent scroll restoration on page load
export const shouldUpdateScroll = () => {
  return false
} 