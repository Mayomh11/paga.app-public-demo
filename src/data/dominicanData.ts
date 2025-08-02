// Dominican Republic realistic user profiles and transaction data

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  location: string;
  city: string;
  province: string;
  status: 'active' | 'offline' | 'away';
  balance?: string;
  joinDate?: string;
}

export interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'fund_added';
  amount: number;
  currency: string;
  timestamp: Date;
  description: string;
  from?: UserProfile;
  to?: UserProfile;
  merchant?: string;
  location?: string;
  category?: string;
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  location: string;
  city: string;
  province: string;
  logo: string;
}

// Authentic Dominican names (mix of traditional and modern)
export const dominicanUsers: UserProfile[] = [
  {
    id: 'dr1',
    name: 'María Esperanza Rodríguez',
    avatar: '👩‍💼',
    location: '🇩🇴 Santo Domingo Este, DN',
    city: 'Santo Domingo Este',
    province: 'Distrito Nacional',
    status: 'active',
    balance: '$2,847.30',
    joinDate: '2024-01-15'
  },
  {
    id: 'dr2', 
    name: 'Rafael Antonio Peña',
    avatar: '👨‍💻',
    location: '🇩🇴 Santiago, Santiago',
    city: 'Santiago de los Caballeros',
    province: 'Santiago',
    status: 'active',
    balance: '$1,523.75',
    joinDate: '2024-02-08'
  },
  {
    id: 'dr3',
    name: 'Carmen Dolores Méndez',
    avatar: '👩‍🎓',
    location: '🇩🇴 La Romana, La Romana',
    city: 'La Romana',
    province: 'La Romana',
    status: 'away',
    balance: '$943.50',
    joinDate: '2024-03-12'
  },
  {
    id: 'dr4',
    name: 'José Miguel Santos',
    avatar: '👨‍🔧',
    location: '🇩🇴 Puerto Plata, Puerto Plata',
    city: 'Puerto Plata',
    province: 'Puerto Plata',
    status: 'active',
    balance: '$3,156.80',
    joinDate: '2024-01-28'
  },
  {
    id: 'dr5',
    name: 'Ana Lucía Fernández',
    avatar: '👩‍⚕️',
    location: '🇩🇴 San Pedro de Macorís, San Pedro',
    city: 'San Pedro de Macorís',
    province: 'San Pedro de Macorís',
    status: 'active',
    balance: '$4,201.25',
    joinDate: '2024-02-20'
  },
  {
    id: 'dr6',
    name: 'Francisco Javier Morales',
    avatar: '👨‍🍳',
    location: '🇩🇴 Baní, Peravia',
    city: 'Baní',
    province: 'Peravia',
    status: 'offline',
    balance: '$756.40',
    joinDate: '2024-03-05'
  },
  {
    id: 'dr7',
    name: 'Isabella Marie García',
    avatar: '👩‍🎨',
    location: '🇩🇴 Higüey, La Altagracia',
    city: 'Higüey',
    province: 'La Altagracia',
    status: 'active',
    balance: '$1,892.60',
    joinDate: '2024-01-10'
  },
  {
    id: 'dr8',
    name: 'Carlos Enrique Jiménez',
    avatar: '👨‍🚗',
    location: '🇩🇴 Moca, Espaillat',
    city: 'Moca',
    province: 'Espaillat',
    status: 'away',
    balance: '$2,334.90',
    joinDate: '2024-02-14'
  }
];

// Popular Dominican merchants and businesses
export const dominicanMerchants: Merchant[] = [
  {
    id: 'm1',
    name: 'Supermercados Nacional',
    category: 'Grocery',
    location: 'Av. 27 de Febrero, Santo Domingo',
    city: 'Santo Domingo',
    province: 'Distrito Nacional',
    logo: '🛒'
  },
  {
    id: 'm2',
    name: 'Farmacia Carol',
    category: 'Pharmacy',
    location: 'Calle El Conde, Zona Colonial',
    city: 'Santo Domingo',
    province: 'Distrito Nacional',
    logo: '💊'
  },
  {
    id: 'm3',
    name: 'Agil Gasolinera',
    category: 'Gas Station',
    location: 'Autopista Duarte, Santiago',
    city: 'Santiago',
    province: 'Santiago',
    logo: '⛽'
  },
  {
    id: 'm4',
    name: 'Restaurant Adrian Tropical',
    category: 'Restaurant',
    location: 'Malecón, Puerto Plata',
    city: 'Puerto Plata',
    province: 'Puerto Plata',
    logo: '🍽️'
  },
  {
    id: 'm5',
    name: 'Claro Dominicana',
    category: 'Telecom',
    location: 'Plaza Central, La Romana',
    city: 'La Romana',
    province: 'La Romana',
    logo: '📱'
  },
  {
    id: 'm6',
    name: 'Banco Popular Dominicano',
    category: 'Banking',
    location: 'Ave. John F. Kennedy, Santo Domingo',
    city: 'Santo Domingo',
    province: 'Distrito Nacional',
    logo: '🏦'
  },
  {
    id: 'm7',
    name: 'Colmado La Esperanza',
    category: 'Convenience Store',
    location: 'Barrio Villa Consuelo, Santo Domingo',
    city: 'Santo Domingo',
    province: 'Distrito Nacional',
    logo: '🏪'
  },
  {
    id: 'm8',
    name: 'Uber Eats RD',
    category: 'Food Delivery',
    location: 'Various locations',
    city: 'Santo Domingo',
    province: 'Distrito Nacional',
    logo: '🚗'
  }
];

// Realistic transaction history with Dominican context
export const generateDominicanTransactions = (): Transaction[] => {
  const transactions: Transaction[] = [
    {
      id: 'tx1',
      type: 'sent',
      amount: 2500,
      currency: 'DOP',
      timestamp: new Date('2024-08-01T14:30:00'),
      description: 'Pago de alquiler',
      to: dominicanUsers[0],
      category: 'Housing'
    },
    {
      id: 'tx2',
      type: 'received',
      amount: 850,
      currency: 'DOP',
      timestamp: new Date('2024-08-01T11:15:00'),
      description: 'Pago freelance diseño web',
      from: dominicanUsers[1],
      category: 'Income'
    },
    {
      id: 'tx3',
      type: 'sent',
      amount: 75,
      currency: 'USD',
      timestamp: new Date('2024-07-31T19:45:00'),
      description: 'Cena familiar',
      merchant: 'Restaurant Adrian Tropical',
      location: 'Puerto Plata',
      category: 'Food & Dining'
    },
    {
      id: 'tx4',
      type: 'sent',
      amount: 1200,
      currency: 'DOP',
      timestamp: new Date('2024-07-31T16:20:00'),
      description: 'Compras supermercado',
      merchant: 'Supermercados Nacional',
      location: 'Santo Domingo',
      category: 'Grocery'
    },
    {
      id: 'tx5',
      type: 'fund_added',
      amount: 100,
      currency: 'USD',
      timestamp: new Date('2024-07-31T09:30:00'),
      description: 'Recarga desde tarjeta Visa',
      category: 'Top-up'
    },
    {
      id: 'tx6',
      type: 'sent',
      amount: 500,
      currency: 'DOP',
      timestamp: new Date('2024-07-30T13:10:00'),
      description: 'Recarga Claro',
      merchant: 'Claro Dominicana',
      location: 'La Romana',
      category: 'Utilities'
    },
    {
      id: 'tx7',
      type: 'received',
      amount: 3500,
      currency: 'DOP',
      timestamp: new Date('2024-07-30T08:00:00'),
      description: 'Transferencia familiar',
      from: dominicanUsers[4],
      category: 'Family'
    },
    {
      id: 'tx8',
      type: 'sent',
      amount: 45,
      currency: 'USD',
      timestamp: new Date('2024-07-29T21:30:00'),
      description: 'Uber Eats - Pollo asado',
      merchant: 'Uber Eats RD',
      location: 'Santo Domingo',
      category: 'Food Delivery'
    },
    {
      id: 'tx9',
      type: 'sent',
      amount: 320,
      currency: 'DOP',
      timestamp: new Date('2024-07-29T17:45:00'),
      description: 'Medicamentos',
      merchant: 'Farmacia Carol',
      location: 'Zona Colonial',
      category: 'Healthcare'
    },
    {
      id: 'tx10',
      type: 'sent',
      amount: 950,
      currency: 'DOP',
      timestamp: new Date('2024-07-29T12:00:00'),
      description: 'Gasolina',
      merchant: 'Agil Gasolinera',
      location: 'Santiago',
      category: 'Transportation'
    }
  ];

  return transactions;
};

// Get random Dominican user
export const getRandomDominicanUser = (): UserProfile => {
  return dominicanUsers[Math.floor(Math.random() * dominicanUsers.length)];
};

// Get users by city
export const getUsersByCity = (city: string): UserProfile[] => {
  return dominicanUsers.filter(user => user.city.toLowerCase().indexOf(city.toLowerCase()) !== -1);
};

// Get merchants by category
export const getMerchantsByCategory = (category: string): Merchant[] => {
  return dominicanMerchants.filter(merchant => 
    merchant.category.toLowerCase().indexOf(category.toLowerCase()) !== -1
  );
};

export default {
  dominicanUsers,
  dominicanMerchants,
  generateDominicanTransactions,
  getRandomDominicanUser,
  getUsersByCity,
  getMerchantsByCategory
};