<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlocCompetenceController extends AbstractController
{
    /**
     * @Route("/bloc/competence", name="app_bloc_competence")
     */
    public function index(): Response
    {
        return $this->render('bloc_competence/bdc.html.twig', [
            'controller_name' => 'BlocCompetenceController',
        ]);
    }
}
