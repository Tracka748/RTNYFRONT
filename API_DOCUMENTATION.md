# RocTicketNY API Documentation

Base URL: `https://api.rocticketny.com`

## Authentication
All API requests should include appropriate authentication headers when required.

## Error Handling
The API returns standard HTTP status codes and JSON error responses:

```json
{
  "error": "Error message",
  "status": 400
}
```

## Data Types

### Event
```typescript
interface Event {
  id: number;
  name: string;
  description?: string;
  venueId?: number;
  venueName: string;
  dateTime: string; // ISO 8601 format
  price: string; // USD amount
  originalPrice?: string; // USD amount for discounted events
  category: string;
  imageUrl?: string;
  isFeatured?: boolean;
  isHotTicket?: boolean;
  isTonight?: boolean;
}
```

### Venue
```typescript
interface Venue {
  id: number;
  name: string;
  location: string;
  description?: string;
  capacity?: number;
  imageUrl?: string;
  upcomingEvents?: string[];
}
```

### Deal
```typescript
interface Deal {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  validUntil?: string; // ISO 8601 format
}
```

### SearchParams
```typescript
interface SearchParams {
  query: string;
  category: string;
}
```

## Endpoints

### Events

#### Get All Events
- **GET** `/events`
- **Description**: Retrieve all available events
- **Response**: `Event[]`

#### Get Hot Tickets
- **GET** `/events/hot-tickets`
- **Description**: Retrieve currently trending/popular events
- **Response**: `Event[]`

#### Get Events Tonight
- **GET** `/events/tonight`
- **Description**: Retrieve events happening tonight
- **Response**: `Event[]`

#### Search Events
- **GET** `/events/search`
- **Description**: Search for events by query and category
- **Query Parameters**:
  - `q` (string, required): Search query
  - `category` (string, required): Event category filter
- **Response**: `Event[]`

### Venues

#### Get All Venues
- **GET** `/venues`
- **Description**: Retrieve all available venues
- **Response**: `Venue[]`

#### Get Popular Venues
- **GET** `/venues/popular`
- **Description**: Retrieve most popular venues
- **Response**: `Venue[]`

### Deals

#### Get Active Deals
- **GET** `/deals/active`
- **Description**: Retrieve all currently active drink deals
- **Response**: `Deal[]`

#### Claim Deal
- **POST** `/deals/claim`
- **Description**: Claim a specific deal
- **Request Body**:
```json
{
  "deal_id": number
}
```
- **Response**:
```json
{
  "success": boolean,
  "message": string
}
```

### Tickets

#### Purchase Ticket
- **POST** `/tickets/purchase`
- **Description**: Purchase tickets for an event
- **Request Body**:
```json
{
  "event_id": number,
  "quantity": number (default: 1)
}
```
- **Response**:
```json
{
  "success": boolean,
  "message": string
}
```

## Rate Limiting
Please respect API rate limits to ensure optimal performance for all users.

## Support
For API support and access, contact the RocTicketNY development team.