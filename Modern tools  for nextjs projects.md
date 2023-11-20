1. prisma. https://www.prisma.io/
2. mock api. https://mockapi.io/
3. clsx.  is a library that lets you toggle class names easily

      ``` js
     usage:
      import clsx from 'clsx';
      export default function InvoiceStatus({ status }: { status: string }) {
      return (
     <span
     className={clsx(
     'inline-flex items-center rounded-full px-2 py-1 text-sm',
     {
     'bg-gray-100 text-gray-500': status === 'pending',
     'bg-green-500 text-white': status === 'paid',
     },
     )}
      >
    // ...
    )}
    ```
   ## Optimize fonts and images using cls
4. Cumulative Layout Shift. https://web.dev/articles/cls
   is a metric used by Google to evaluate the performance and user experience of a website.

   Next.js automatically optimizes fonts in the application when you use the next/font module.
   It downloads font files at build time and hosts them with your other static assets.
   This means when a user visits your application, there are no additional network requests
   for fonts which would impact performance.

   ## How to apply fonts to elements in nextJs
5.   Create fonts.ts in the folder you want to keep your fonts

   ## Creating layouts and pages
6.   One benefit of using layouts in Next.js is that on navigation, only the page
     components update while the layout won't re-render. This is called partial rendering:

## Root layout
7.

## Automatic code-splitting and prefetching
8.   To improve the navigation experience, Next.js automatically code splits your application by route segments.
     This is different from a traditional React SPA, where the browser loads all your application code on initial load.

     Note: Furthermore, in production, whenever <Link>
     components appear in the browser's viewport, Next.js automatically prefetches the code for the
     linked route in the background. By the time the user clicks the link, the code for the destination
     page will already be loaded in the background, and this is what makes the page transition near-instant!

## Pattern: Showing active links

9. ## Fetching Data using an API layer
   In nextjs, you can create API endpoints using `Route Handlers`
   When you're creating a full-stack application, you'll also need to write logic to
   interact with your database. For relational databases like Postgres, you can do this with SQL, or an ORM
   like Prisma.

10. ### There are a few cases where you have to write database queries:
    - When creating your API endpoints, you need to write logic to interact with your database.
    - If you are using React Server Components (fetching data on the server), you can skip the
      API layer, and query your database directly without risking exposing your database secrets to the client.

11. ### Request waterfall
    The data requests are unintentionally blocking each other, creating a request waterfall.
    By default, Next.js prerenders routes to improve performance, this is called Static Rendering. So if your data changes, it won't be reflected in your dashboard.
   
   What are request waterfalls?
   A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.


12. ### What is streaming?

Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.


13. ### Streaming a component
customers
So far, you're streaming a whole page. But, instead, you can be more granular and stream specific components using React Suspense.

Suspense allows you to defer rendering parts of your application until some condition is met (e.g. data is loaded). You can wrap your dynamic components in Suspense. Then, pass it a fallback component to show while the dynamic component loads

14. ### Suspense boundaries




15. Streaming and Server Components give us new ways to handle data fetching and loading states, ultimately with the goal of improving the end user experience.




16. ### What is Partial Prerendering?

In Next.js 14, there is a preview of a new rendering
model called Partial Prerendering. Partial Prerendering is an experimental feature that allows you to render a route with a static loading shell, while keeping some parts dynamic. In other words, you can isolate the dynamic parts of a route. For example


17. ### Adding the search functionality

These are the Next.js client hooks that you'll use to implement the search functionality:
useSearchParams- Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.usePathname - Lets you read the current URL's pathname. For example, for the route /dashboard/invoices, usePathname would return '/dashboard/invoices'.
useRouter - Enables navigation between routes within client components programmatically.

18. ### Mutating Data