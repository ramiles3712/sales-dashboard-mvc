using Microsoft.AspNetCore.Mvc;

namespace DashboardVendas.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
