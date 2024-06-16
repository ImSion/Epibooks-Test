import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fantasy from '../Books/fantasy.json';
import App from '../App'
import Welcome from './Welcome';
import CommentArea from './CommentArea';

// Primo test
test('Welcome viene montato correttamente'), () => {
    render(<App />) 

    const WelcomeText = screen.getByText(/Questo è il mio EpicBooks!/i);
 
    expect(WelcomeText).toBeInTheDocument();
 
}



// Secondo test
test('verifico che le card siano numericamente uguali ai libri', () => {
  
  render(<App books={fantasy} />);

  const cards = screen.getAllByTestId('card');
  
  expect(cards).toHaveLength(fantasy.length);
  
});



// Terzo test
test('verifico se comment area viene renderizzato correttamente', async () => {
    render(<App />);
  
    const card = await screen.findByText("The Last Wish: Introducing the Witcher");
    fireEvent.click(card);
  
    const CommentArea = screen.getByText(/Lascia una valutazione/i);
  
    expect(CommentArea).toBeInTheDocument();
  });



// Quarto test
test("filtra gli utenti sulla base degli input", async () => {

    render(<App />);

    
    const input = screen.getByPlaceholderText(/Cerca un libro.../i);

    
    fireEvent.change(input, { target: { value: "the last" } });

    
    const filteredCards = await screen.findAllByTestId("card");

    
    expect(filteredCards).toHaveLength(2);

    
    expect(screen.getByText("The Last Wish: Introducing the Witcher")).toBeInTheDocument();
});



//Quinto test
test('Verifico che cliccando su un libro il bordo si colori', () => {
  render(<App />)

  const cards = screen.getAllByTestId('card');
  const card = cards[0].querySelector('img')
  
  fireEvent.click(card)

  expect(cards[0].classList.contains('border-2'&&'border-red-500')).toBe(true); 
})



// Sesto Test
test('deseleziono il libro precedente quando si seleziona un nuovo libro', () => {
  render(<App fantasy={fantasy} />);
    
    const cards = screen.getAllByTestId('card');
    const firstcard = cards[0].querySelector('img');
    const secondcard = cards[1].querySelector('img');
    
    // Seleziono il primo libro
    fireEvent.click(firstcard);
    expect(cards[0].classList.contains('border-2'&&'border-red-500' )).toBe(true);
    
    // Seleziono il secondo libro
    fireEvent.click(secondcard);
    expect(cards[1].classList.contains('border-2'&&'border-red-500')).toBe(true);
    expect(cards[0].classList.contains('border-2'&&'border-red-500')).toBe(false);
});


// Settimo Test
test('Verifico se ci sono istanze di SingleComment quando avvio la pagina ', () => {
  render(<App />);

  const area = screen.queryAllByTestId("mycomment");
  const text = screen.queryByText(/voto/i)

  expect(area[0]).toBe(undefined); 
  expect(text).not.toBeInTheDocument()
});


// Ottavo test
test("verifico che cliccando su di un libro con recensioni, esse vengano caricate", async () => {
  render(<App />);

  const bookCard = await screen.findByText("Sword of Destiny (The Witcher)");
  fireEvent.click(bookCard);

  const comments = await waitFor(() => screen.findAllByTestId("comment"));

  expect(comments.length).toBeGreaterThan(0);
});
