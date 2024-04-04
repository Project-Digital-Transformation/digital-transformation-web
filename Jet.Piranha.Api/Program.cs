// class Program
// {
//     static void Main(string[] args)
//     {
//         System.Console.WriteLine("Hello from Izaiah");
//     }
// }

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // This enables MVC controllers (without views) and API-related features

// Configure the HTTP request pipeline.
var app = builder.Build();

// Use routing
app.UseRouting();

// Use authorization if needed. For now, it's commented out since your controller doesn't seem to require it.
// app.UseAuthorization();

// Map controllers to the application's request pipeline.
app.MapControllers();

app.Run(); // This runs the application and listens for incoming HTTP requests.
