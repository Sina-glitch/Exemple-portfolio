<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VeilleTechnoController extends AbstractController
{
    /**
     * @Route("/veille/techno", name="veille_technologique")
     */
    public function index(): Response
    {
        return $this->render('veille_techno/veille_techno.html.twig', [
            'controller_name' => 'VeilleTechnoController',
        ]);
    }
}
