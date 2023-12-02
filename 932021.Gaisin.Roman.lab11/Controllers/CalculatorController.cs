using Microsoft.AspNetCore.Mvc;

namespace _932021.Gaisin.Roman.lab11.Controllers;

public class CalculatorController : Controller
{
    private readonly ILogger<CalculatorController> _logger;

    public CalculatorController(ILogger<CalculatorController> logger)
    {
        _logger = logger;
    }

    public IActionResult UsingModelCalc()
    {
        return View(new CalculatorDataModel());
    }

    public IActionResult UsingViewDataCalc()
    {
        ViewData["CalculatorDataModel"] = new CalculatorDataModel();
        return View();
    }

    public IActionResult UsingViewBagCalc()
    {
        ViewBag.CalculatorDataModel = new CalculatorDataModel();
        return View();
    }

    public IActionResult AccessServiceDirectly()
    {
        return View();
    }
}
