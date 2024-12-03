# Task-A

## Setup Instructions

1. **Clone the repository**:

   git clone https://github.com/yourusername/repository-name.git

2. **Technology Choice and Rationale**
   
- **HTML**: Used to structure the layout of the draggable cards and ensure semantic clarity.
- **CSS**: Provides responsive and visually appealing designs with gradient backgrounds, transitions, and card layouts.
- **JavaScript**: Implements drag-and-drop functionality, updates classes dynamically, and handles event listeners.
- **Browser Native Drag-and-Drop API**: Chosen for simplicity and efficiency in implementing drag-and-drop interactions without the need for additional libraries.

These technologies were chosen for their lightweight nature, simplicity, and ability to run seamlessly in any modern browser without dependencies.

3. **Known Limitations and Trade-Offs**

**Drag-and-Drop Limited to Specific Card**:

- Only the card in the middle (`.middle`) can be dragged.
- Other cards are static and cannot be repositioned.

**Visual Clarity**:

- The layout may not scale well on smaller screens without further adjustments to `styles.css`.

**Event Handling**:

- Drag-and-drop functionality depends on manual updates of classes and doesn't persist after a page refresh.

4. **Future Improvements**

**Responsive Design**:

- Optimize the layout for various screen sizes, especially mobile devices.

**Dynamic Content**:

- Replace placeholder forms with meaningful content or functionalities.

**Animations**:

- Introduce smooth animations for card transitions to improve the user experience.

**Integration with Frameworks**:

- Explore frameworks like React or Vue.js to make the application more modular and scalable.
