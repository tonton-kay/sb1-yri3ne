// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }
  }

  // Announcement Bar Slider
  const announcementSlider = document.querySelector('.announcement-slider');
  if (announcementSlider && announcementSlider.dataset.autoplay === 'true') {
    const slides = announcementSlider.querySelectorAll('.announcement-slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.add('hidden'));
      slides[index].classList.remove('hidden');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    showSlide(0);
    setInterval(nextSlide, 5000);
  }

  // Quick Add to Cart
  const quickAddButtons = document.querySelectorAll('[data-quick-add]');
  
  quickAddButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const variantId = button.dataset.variantId;
      button.classList.add('loading');
      
      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: [{
              id: variantId,
              quantity: 1
            }]
          })
        });

        if (response.ok) {
          updateCartCount();
          showCartNotification('Product added to cart');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        showCartNotification('Error adding product to cart', 'error');
      } finally {
        button.classList.remove('loading');
      }
    });
  });

  // Cart Count Update
  async function updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const cartCount = document.querySelector('[data-cart-count]');
      
      if (cartCount) {
        cartCount.textContent = cart.item_count;
        cartCount.classList.remove('hidden');
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // Cart Notification
  function showCartNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white z-50`;
    notification.textContent = message;

    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // Product Image Zoom
  const productImages = document.querySelectorAll('.product-image-zoom');
  
  productImages.forEach(image => {
    image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
      
      const modalImage = document.createElement('img');
      modalImage.src = image.src;
      modalImage.className = 'max-h-[90vh] max-w-[90vw] object-contain';
      
      modal.appendChild(modalImage);
      document.body.appendChild(modal);
      
      modal.addEventListener('click', () => {
        modal.remove();
      });
    });
  });

  // Wishlist Toggle
  const wishlistButtons = document.querySelectorAll('[data-wishlist-button]');
  
  wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      
      const index = wishlist.indexOf(productId);
      if (index === -1) {
        wishlist.push(productId);
        button.classList.add('active');
      } else {
        wishlist.splice(index, 1);
        button.classList.remove('active');
      }
      
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistCount();
    });
  });

  // Update Wishlist Count
  function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const count = document.querySelector('[data-wishlist-count]');
    
    if (count) {
      count.textContent = wishlist.length;
      count.classList.toggle('hidden', wishlist.length === 0);
    }
  }

  // Initialize
  updateCartCount();
  updateWishlistCount();
});