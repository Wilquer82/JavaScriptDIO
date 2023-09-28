class Hero {
  constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
  }

  atacar() {
      let ataque;
      switch(this.type) {
          case 'mago':
              ataque = 'usou magia';
              break;
          case 'guerreiro':
              ataque = 'usou espada';
              break;
          case 'monge':
              ataque = 'usou artes marciais';
              break;
          case 'ninja':
              ataque = 'usou shuriken';
              break;
          default:
              ataque = '';
      }
      console.log(`o ${this.type} atacou usando ${ataque}`);
  }
}

// Usage
let hero = new Hero('John', 25, 'mago');
hero.atacar();  // Outputs: o mago atacou usando usou magia
