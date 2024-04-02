function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <p
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        {' '}
        Welcome{' '}
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        "Our 'Phone Book' application is a convenient way to organize and store
        all your contacts in one place. Forget about the clutter in your contact
        list - now you can easily add new contacts, edit existing ones, and
        quickly find the necessary phone numbers and addresses. We offer an
        intuitive interface, personalized categories for easy sorting, and a
        quick search function so you can find the information you need in just a
        few clicks. Our 'Phone Book' application is your reliable assistant in
        organizing contacts!"
      </p>
    </div>
  );
}

export default Home;
