import React from 'react'

function Accordian() {
  return (
    <div>
        <div class="accordion">
  <details class="accordion-item" name="accordionExample" open>
    <summary class="accordion-header">
      Accordion Item #1
      <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div class="accordion-body">
      <strong>This is the first item’s accordion body.</strong> It is shown by default because the <code>open</code> attribute is present. The native <code>&lt;details&gt;</code> element handles all the show/hide logic without any JavaScript. You can put any HTML content within the <code>.accordion-body</code>.
    </div>
  </details>
  <details class="accordion-item" name="accordionExample">
    <summary class="accordion-header">
      Accordion Item #2
      <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div class="accordion-body">
      <strong>This is the second item’s accordion body.</strong> The <code>name</code> attribute groups this with other accordion items. When you open this item, any other open item in the same group will close automatically.
    </div>
  </details>
  <details class="accordion-item" name="accordionExample">
    <summary class="accordion-header">
      Accordion Item #3
      <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div class="accordion-body">
      <strong>This is the third item’s accordion body.</strong> This exclusive accordion behavior is built into the browser—no Bootstrap JavaScript required. Just use matching <code>name</code> attributes on your <code>&lt;details&gt;</code> elements.
    </div>
  </details>
</div>
    </div>
  )
}

export default Accordian