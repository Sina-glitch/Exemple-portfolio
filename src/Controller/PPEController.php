<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PPEController extends AbstractController
{
    /**
     * @Route("/p/p/e", name="ppe")
     */
    public function index(): Response
    {
        return $this->render('ppe/Ppe.html.twig', [
            'controller_name' => 'PPEController',
        ]);
    }
}
