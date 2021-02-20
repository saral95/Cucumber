package org.RunnerAdactin;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"}, glue= {"org.stepdefAdactin"}, monochrome=true, plugin= {"pretty", "html:C:\\Users\\Administrator\\eclipse-workspace\\CucumberProject\\target", "json:C:\\\\Users\\\\Administrator\\\\eclipse-workspace\\\\CucumberProject\\\\target\\\\cucumber.json"},  snippets=SnippetType.CAMELCASE)  
public class RunnerAdactin {

}
