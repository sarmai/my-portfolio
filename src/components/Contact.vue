<template>
  <div>
    <section>
      <div class="contact-form">
        <form class="flow">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            style="height: 200px"
          ></textarea>
          <input class="btn cta-btn form-btn" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-form input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 1em;
  background-color: unset;
  /* border: 0; */
  border: 1px solid var(--accent);
  border-radius: 0;
  resize: vertical;
  font-family: inherit;
  color: inherit;
}
</style>
